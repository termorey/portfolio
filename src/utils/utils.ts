const multiClass = (...args: any[]) => {
    return args.filter((a: any) => typeof a !== "boolean").join(" ");
};

export {
    multiClass
}