export default function onProfilerCallback(
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any,
    interactions: any
) {
    const message = '[' + id + '] => ' + phase + ' phase, ' + 
        actualDuration + ' ms ; Interaction: ' + interactions.size;
    console.log(message);
}