#!/usr/bin/env python3
import os
import re
import json
from pathlib import Path

def extract_questions_from_ts_file(file_path):
    """Extrae preguntas de un archivo TypeScript quizData.ts"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Buscar el array de preguntas en el archivo TypeScript
        # Patrón para encontrar el export const questions = [...]
        pattern = r'export\s+const\s+questions\s*:\s*Question\[\]\s*=\s*(\[.*?\]);'
        match = re.search(pattern, content, re.DOTALL)
        
        if not match:
            # Intentar otro patrón
            pattern = r'const\s+questions\s*:\s*Question\[\]\s*=\s*(\[.*?\]);'
            match = re.search(pattern, content, re.DOTALL)
        
        if not match:
            # Intentar patrón más simple
            pattern = r'questions\s*=\s*(\[.*?\]);'
            match = re.search(pattern, content, re.DOTALL)
            
        if not match:
            print(f"No se encontró patrón de preguntas en {file_path}")
            return []
        
        questions_str = match.group(1)
        
        # Limpiar el string para hacerlo más parseable
        # Reemplazar comillas simples por dobles
        questions_str = questions_str.replace("'", '"')
        
        # Intentar extraer manualmente las preguntas usando regex
        questions = []
        
        # Buscar cada objeto pregunta
        question_pattern = r'\{\s*id:\s*(\d+),.*?questionText:\s*["\']([^"\']*)["\'].*?options:\s*\[(.*?)\].*?correctAnswerIndex:\s*(\d+).*?rationale:\s*["\']([^"\']*)["\'].*?difficulty:\s*["\']([^"\']*)["\'].*?\}'
        
        question_matches = re.finditer(question_pattern, questions_str, re.DOTALL)
        
        for match in question_matches:
            id_val = int(match.group(1))
            question_text = match.group(2)
            options_str = match.group(3)
            correct_index = int(match.group(4))
            rationale = match.group(5)
            difficulty = match.group(6)
            
            # Extraer opciones
            option_pattern = r'\{\s*text:\s*["\']([^"\']*)["\'].*?\}'
            option_matches = re.findall(option_pattern, options_str)
            
            options = [{"text": opt} for opt in option_matches]
            
            question = {
                "id": id_val,
                "questionText": question_text,
                "options": options,
                "correctAnswerIndex": correct_index,
                "rationale": rationale,
                "difficulty": difficulty
            }
            questions.append(question)
        
        return questions
        
    except Exception as e:
        print(f"Error procesando {file_path}: {e}")
        return []

def process_all_extracted_folders():
    """Procesa todas las carpetas extraídas y extrae las preguntas"""
    current_dir = Path('.')
    all_questions = {}
    total_questions = 0
    
    print("=== EXTRACCIÓN DE PREGUNTAS DE ARCHIVOS DE REFERENCIA ===\n")
    
    # Obtener todos los directorios
    directories = [d for d in current_dir.iterdir() if d.is_dir()]
    
    for directory in sorted(directories):
        quiz_data_path = directory / 'services' / 'quizData.ts'
        
        if quiz_data_path.exists():
            print(f"Procesando: {directory.name}")
            questions = extract_questions_from_ts_file(quiz_data_path)
            
            if questions:
                all_questions[directory.name] = questions
                total_questions += len(questions)
                print(f"  ✓ Extraídas {len(questions)} preguntas")
            else:
                print(f"  ✗ No se encontraron preguntas válidas")
                # Intentar leer el archivo para ver su contenido
                try:
                    with open(quiz_data_path, 'r', encoding='utf-8') as f:
                        content = f.read()[:500]  # Primeros 500 caracteres
                        print(f"    Contenido inicial: {content}...")
                except:
                    pass
        else:
            print(f"⚠️  No se encontró quizData.ts en {directory.name}")
    
    print(f"\n=== RESUMEN DE EXTRACCIÓN ===")
    print(f"Total de archivos procesados: {len(all_questions)}")
    print(f"Total de preguntas extraídas: {total_questions}")
    
    print(f"\n=== DETALLE POR ARCHIVO ===")
    for filename, questions in all_questions.items():
        print(f"Archivo: {filename} | Preguntas: {len(questions)}")
    
    # Guardar todas las preguntas en un archivo JSON
    with open('extracted_questions.json', 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
    
    print(f"\n✓ Todas las preguntas guardadas en 'extracted_questions.json'")
    
    return all_questions, total_questions

if __name__ == "__main__":
    all_questions, total = process_all_extracted_folders()
