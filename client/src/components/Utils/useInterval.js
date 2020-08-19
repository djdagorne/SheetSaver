/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

// TODO implement this into my client-to-server socket updates

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/*
 EXAMPLE

 useInterval(async () => {
  const reports = await reportService.getGeneratedReports(userinfo);
  setRReports(reports);
 }, REPORT_REFRESH_INTERVAL)

*/