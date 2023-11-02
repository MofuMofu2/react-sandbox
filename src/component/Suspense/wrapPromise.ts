type Result = "pending" | "fulfilled" | "rejected";

export function wrapPromise(promise: Promise<Result>) {
  let status: Result = "pending";
  let data: string;

  let wrapper = promise.then(
    (result) => {
      status = "fulfilled";
      data = result;
    },
    (e) => {
      status = "rejected";
      data = e;
    }
  );

  return function () {
    switch (status) {
      case "pending":
        throw wrapper;
      case "fulfilled":
        throw data;
      case "rejected":
        throw data;
    }
  };
}
