type PromiseResult<T> =
  | { status: "fulfilled"; value: T }
  | { status: "rejected"; reason: any };

function customPromiseAllSettled<T>(
  promises: Promise<T>[]
): Promise<PromiseResult<T>[]> {
  return Promise.all(
    promises.map((promise) =>
      promise
        .then<PromiseResult<T>>((value) => ({ status: "fulfilled", value }))
        .catch<PromiseResult<T>>((reason) => ({ status: "rejected", reason }))
    )
  );
}

const promises: Promise<number>[] = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

customPromiseAllSettled(promises).then((results) => {
  console.log("All promises settled:", results);
});
