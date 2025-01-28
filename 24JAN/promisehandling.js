console.log("START");
const request = fetch("https://www.redbus.in/seowapi/offers");

const ff1 = (val) => {
    console.log("YES YES", val);
};

const ff2 = (err) => {
    console.log("NO", err);
};

const fn1 = (val) => {
    console.log("LEVEL 1 - START", val);
    const pr = val.json();
    console.log("LEVEL 1 - MID", val);
    pr.then(ff1).catch(ff2);
    console.log("LEVEL 1 - END", val);
};

const fn2 = (err) => {
    console.log("NO", err);
};

request.then(fn1).catch(fn2);

console.log("END");
