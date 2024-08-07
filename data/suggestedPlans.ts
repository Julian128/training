// src/data/suggestedPlans.ts

import { Exercise } from "../models/Exercise";
import { generateExerciseId } from "../utils/utils";
import { Set } from "../models/Exercise";

export interface Plan {
    name: string;
    exercises: Exercise[];
}

function createExercise(exerciseData: Omit<Exercise, "id">): Exercise {
    return {
        ...exerciseData,
        id: generateExerciseId(exerciseData),
    };
}

function createNSunsWorkout(baseWeight: number): Set[] {
    return [
        { reps: 5, relativeWeight: baseWeight * 0.75, rpe: 0 },
        { reps: 3, relativeWeight: baseWeight * 0.85, rpe: 0 },
        { reps: 1, relativeWeight: baseWeight * 0.95, rpe: 0 },
        { reps: 5, relativeWeight: baseWeight * 0.9, rpe: 0 },
        { reps: 3, relativeWeight: baseWeight * 0.85, rpe: 0 },
        { reps: 3, relativeWeight: baseWeight * 0.8, rpe: 0 },
        { reps: 5, relativeWeight: baseWeight * 0.75, rpe: 0 },
        { reps: 5, relativeWeight: baseWeight * 0.7, rpe: 0 },
        { reps: 5, relativeWeight: baseWeight * 0.65, rpe: 0 },
    ];
}

export const suggestedPlans: { [key: string]: Plan } = {
    powerlifting: {
        name: "Powerlifting",
        exercises: [
            createExercise({
                name: "Squat",
                description: "",
                weeklySets: 8,
                targetRPE: 8,
                category: "nsuns",
                muscleGroup: "Legs",
                workout: createNSunsWorkout(100), // Assuming 100kg as base weight
                oneRepMax: 100,
            }),
            createExercise({
                name: "Bench",
                description: "",
                weeklySets: 12,
                targetRPE: 8,
                category: "nsuns",
                muscleGroup: "Push",
                workout: createNSunsWorkout(80), // Assuming 80kg as base weight
                oneRepMax: 80,
            }),
            createExercise({
                name: "Deadlift",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "nsuns",
                muscleGroup: "Legs",
                workout: createNSunsWorkout(120), // Assuming 120kg as base weight
                oneRepMax: 120,
            }),
        ],
    },
    atgLowerBody: {
        name: "ATG",
        exercises: [
            createExercise({
                name: "Dead Hang",
                description: "45s",
                weeklySets: 8,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Shoulders",
            }),
            createExercise({
                name: "Deep Squat",
                description: "60s",
                weeklySets: 8,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Hips",
            }),
            createExercise({
                name: "Ankle Stretch",
                description: "",
                weeklySets: 6,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Lower Legs",
            }),
            createExercise({
                name: "ATG Split Squat",
                description: "",
                weeklySets: 8,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Hips",
            }),
            createExercise({
                name: "Hamstring Stretch",
                description: "",
                weeklySets: 10,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Seated Good Morning",
                description: "",
                weeklySets: 4,
                targetRPE: 7,
                category: "mobility",
                muscleGroup: "Core",
            }),
            createExercise({
                name: "Back Extension",
                description: "",
                weeklySets: 4,
                targetRPE: 7,
                category: "strength",
                muscleGroup: "Core",
            }),
            createExercise({
                name: "Calf Raise",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Lower Legs",
            }),
            createExercise({
                name: "Seated Calf Raise",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Lower Legs",
            }),
            createExercise({
                name: "Tibialis Raise",
                description: "",
                weeklySets: 6,
                targetRPE: 7,
                category: "strength",
                muscleGroup: "Lower Legs",
            }),
            createExercise({
                name: "Couch Stretch",
                description: "",
                weeklySets: 4,
                targetRPE: 6,
                category: "mobility",
                muscleGroup: "Hips",
            }),
            createExercise({
                name: "Pigeon Stretch",
                description: "",
                weeklySets: 4,
                targetRPE: 6,
                category: "mobility",
                muscleGroup: "Hips",
            }),
            createExercise({
                name: "Pancake Stretch",
                description: "",
                weeklySets: 6,
                targetRPE: 6,
                category: "mobility",
                muscleGroup: "Hips",
            }),
            createExercise({
                name: "Quadratus Lumborum",
                description: "",
                weeklySets: 4,
                targetRPE: 7,
                category: "strength",
                muscleGroup: "Core",
            }),
            createExercise({
                name: "External Rotation",
                description: "",
                weeklySets: 4,
                targetRPE: 8,
                category: "mobility",
                muscleGroup: "Shoulders",
            }),
            createExercise({
                name: "Lower Traps",
                description: "",
                weeklySets: 4,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Core",
            }),
        ],
    },
    bodybuilding: {
        name: "Bodybuilding",
        exercises: [
            createExercise({
                name: "Romanian Deadlift",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Leg Press",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Hip Thrust",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Leg Curl",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Leg Extension",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Legs",
            }),
            createExercise({
                name: "Incline Bench",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Push",
            }),
            createExercise({
                name: "Overhead Press",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "nsuns",
                muscleGroup: "Push",
            }),
            createExercise({
                name: "Chest Fly",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Push",
            }),
            createExercise({
                name: "Pull Up/Down",
                description: "",
                weeklySets: 8,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Pull",
            }),
            createExercise({
                name: "Row",
                description: "",
                weeklySets: 8,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Pull",
            }),
            createExercise({
                name: "Reverse Fly",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Shoulders",
            }),
            createExercise({
                name: "Side Lateral Raise",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Shoulders",
            }),
            createExercise({
                name: "Bicep",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Arms",
            }),
            createExercise({
                name: "Tricep",
                description: "",
                weeklySets: 6,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Arms",
            }),
            createExercise({
                name: "Crunch",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Core",
            }),
            createExercise({
                name: "Leg Raise",
                description: "",
                weeklySets: 3,
                targetRPE: 8,
                category: "strength",
                muscleGroup: "Core",
            }),
        ],
    },
    endurance: {
        name: "Endurance",
        exercises: [
            createExercise({
                name: "Easy Run",
                description: "6k",
                weeklySets: 4,
                targetRPE: 4,
                category: "endurance",
                muscleGroup: "Legs",
                distance: 6,
            }),
            createExercise({
                name: "Long Run",
                description: "8k",
                weeklySets: 2,
                targetRPE: 5,
                category: "endurance",
                muscleGroup: "Legs",
                distance: 8,
            }),
            createExercise({
                name: "Intervals",
                description: "2x2k",
                weeklySets: 1,
                targetRPE: 8,
                category: "endurance",
                muscleGroup: "Legs",
                distance: 6,
            }),
            createExercise({
                name: "Stair Stepper",
                description: "8",
                weeklySets: 1,
                targetRPE: 4,
                category: "endurance",
                muscleGroup: "Legs",
                distance: 0,
            }),
        ],
    },
    no_program: {
        name: "No Program",
        exercises: [],
    },
};
