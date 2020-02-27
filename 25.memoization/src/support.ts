const measureTime = (cb : ((...args : any[]) => any), ...args : any[]) : number[] => {
    const t0 = performance.now();
    const res = cb(args);
    const t1 = performance.now();
    console.log('Call to ' + cb.name + ' took ' + (t1 - t0) + ' milliseconds.');

    return[ res, (t1 - t0)];
  };

export default measureTime;