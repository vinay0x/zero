import { useState } from "react";

/**
 * Handle async operations without the hassle.
 *
 * @param {Function} asyncMethod The async method to be called.
 * @param {Object} handlerFunctions { onComplete, onError, throwError }
 *
 * @returns {[Function, Boolean]}
 * First item in the return array is the function that you can use
 * to start the async operation.The second item in the array is a boolean
 * that represents the state of the async operation.
 *
 * @example
 * const [startGetRequest, loading] = useAsync(apis.getData, {
 *     onComplete: (result) => doSomething(result),
 *     onError: (error) => handleError(error),
 *     throwError: false
 * });
 */
const useAsync = (asyncMethod, { onComplete, onError = null, throwError = false }) => {
  const [loading, setLoading] = useState(null);

  const start = async (args) => {
    try {
      setLoading(true);
      const result = await asyncMethod(args);
      if (typeof onComplete === "function") {
        onComplete(result);
      }
    } catch (error) {
      if (typeof onError === "function") {
        onError(error);
      } else if (throwError) {
        throw error;
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return [start, loading];
};

export default useAsync;