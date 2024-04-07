export interface KoinError {
  type: "KOIN_ERROR";
  status: number;
  code: number;
  message: string;
}

export function isKoinError(error: unknown): error is KoinError {
  try {
    return (error as KoinError).type === "KOIN_ERROR";
  } catch {
    return false;
  }
}
