/** 코인 서버 에러 인터페이스입니다. message, code를 담고있습니다. */
export interface KoinError {
  type: "KOIN_ERROR";
  status: number;
  code: number;
  message: string;
}

/** 해당 에러가 코인 서버에서 발생한 에러인지 판별합니다. */
export function isKoinError(error: unknown): error is KoinError {
  try {
    return (error as KoinError).type === "KOIN_ERROR";
  } catch {
    return false;
  }
}
