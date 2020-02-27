const memoize = (fn: (...args: any[]) => any) => {
    const cache : any = {}; // 1
    return (...args : any[]) => { // 2
      const stringifiedArgs = JSON.stringify(args); // 3
      const result = (cache[stringifiedArgs] =
        typeof cache[stringifiedArgs] === 'undefined' 
          ? fn(...args)
          : cache[stringifiedArgs]); // 4
      return result; // 5
    };
};


export default memoize;