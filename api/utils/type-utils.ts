export const isTruthy = (val) => {
    console.log(val);
    return val && !["false", "0", ""].includes(val.toString().trim().toLowerCase());
}

export const isFalsy = (val) => {
    return val && !["true", "1"].includes(val.toString().trim().toLowerCase());
}