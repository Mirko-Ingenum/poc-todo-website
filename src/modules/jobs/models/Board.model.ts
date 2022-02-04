import Job from "./Job.model";

export interface Board {
    id: string;
    label: string;
    jobs: Job[];
}