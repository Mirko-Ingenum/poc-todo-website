import Job from "../models/Job.model";

export interface Props {
  jobs: Job[];
}

const Jobs = ({ jobs }: Props) => {
  console.log(jobs);
  return (
    <div>
      {jobs.map(job => (
        <>
          <h5><u>Title :</u> {job.title}</h5>
          <h5><u>Due date :</u> {job.date}</h5>
          <h5><u>Description :</u> {job.description}</h5>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default Jobs;