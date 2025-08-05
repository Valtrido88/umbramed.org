
export interface DetectedMarker {
  marker: string;
  value: string;
  interpretation: string;
}

export interface ReportData {
  serologicalStatus: string;
  summary: string;
  interpretation: string;
  recommendations: string[];
  detectedMarkers: DetectedMarker[];
}
