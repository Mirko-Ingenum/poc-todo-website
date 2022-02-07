import httpService from "../../shared/services/http.service";
import AddJob from "../models/AddJob.model";
import Job from "../models/Job.model";

const endpoint = '/jobs';

const getJob = (
  jobId: string,
): Promise<Job> => httpService
  .get<Job>(`${endpoint}/${jobId}`);

  const addJob =() => (job: AddJob): Promise<Job> => httpService
  .post<Job>(endpoint, job);

  function fetchJobs(){
    fetch(`${process.env.REACT_APP_API_URL}/jobs`)
    .then(response => response.json())
    .catch(error =>console.log(error));
  } 

  
  export default {
    getJob,
    addJob,
  };
  