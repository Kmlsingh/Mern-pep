const pr = fetch("https://api.github.com/users/likbalpande");

console.log(pr);

const cb2 = (data) => {
    console.log(data);
    document.write(data.login);
};

const cb = (val) => {
    console.log("DONE");
    console.log(val);

    const pr2 = val.json();
    pr2.then(cb2).catch(handleError);
};

const handleError = (val) => {
    console.log("Error Occurred", val);
};

pr.then(cb).catch(handleError);
