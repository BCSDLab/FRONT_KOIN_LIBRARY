import axios from 'axios';

/** 삐봇 서버에 에러가 발생했음을 전달해 슬랙 채널로 전달합니다. */
export const sendClientError = (error: unknown) => {
  const url = window.location.href;

  const serializedError = JSON.stringify(
    error,
    Object.getOwnPropertyNames(error),
  );

  const deserializedError = Object.assign(
    new Error(),
    JSON.parse(serializedError),
  );

  axios.post('https://api-slack.internal.bcsdlab.com/api/error-notice/frontend', {
    url,
    error: deserializedError,
  });
};
