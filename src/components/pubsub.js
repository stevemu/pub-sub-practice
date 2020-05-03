
let subs = [];
export function sub(cb) {
    subs.push(cb);
}

export function pub(text) {
    subs.forEach((subscriberCb) => {
        subscriberCb(text);
    })
}