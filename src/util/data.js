export const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export const daysOfTheWeekAbrev = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const exampleCategories = ["Running", "Biking", "Swimming", "Yoga", "Strength", "Physical Therapy"]

export const workoutTypes = ["Sets", "Multi-Sets", "Distance", "For Time", "EMOM", "AMRAP", ]

export const exampleDistance1 = {
    title: "Long Run",
    workoutId: 521,
    time: null,
    distance: 12,
    distanceMeasurement: "mi",
    setsOfReps: null,
    notes: "Leif Erickson out and back",
    category: 0,
    status: "success"
}

export const exampleTime1 = {
    title: "Easy Swim",
    workoutId: 522,
    time: "00:20:00",
    distance: null,
    distanceMeasurement: null,
    setsOfReps: null,
    notes: "Freestyle and breaststroke interchange",
    category: 2,
    status: "fail"
}

export const exampleSetReps1 = {
    title: "Barbell Squat",
    workoutId: 525,
    time: null,
    distance: null,
    distanceMeasurement: null,
    setsOfReps: [{reps: 5, weight: 75, status: "none"},{reps: 5, weight: 75, status: "none"},{reps: 5, weight: 75, status: "none"},{reps: 5, weight: 75, status: "none"},{reps: 5, weight: 75, status: "none"}],
    notes: "Build up to 245lbs or personal best",
    category: 4,
    status: "partial"
}

export const myWorkouts = [exampleDistance1, exampleTime1, exampleSetReps1]