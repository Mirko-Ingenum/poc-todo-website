import React, { useState } from 'react';
import Button from '../../shared/components/Button';
import useSafeApiCall from '../../shared/hooks/useSafeApiCall.hook';
import AddJob from '../models/AddJob.model';
import jobsService from '../services/jobs.service';


const AddJobComponent = () => {


  const [processInProgress, setProcessInProgress] = useState(false);

  const addJob = useSafeApiCall(jobsService.addJob);



  const createJob = async (jobCreated: AddJob) => {

    try {
      setProcessInProgress(true);
      const [job, isFirstAborted] = await addJob(jobCreated);
      if (isFirstAborted) {
        return;
      }

      setProcessInProgress(false);
    } catch (error) {
      setProcessInProgress(false);
    }
  };

  return (

    <form>
      <label>
        Title : 
        <input type="text" value=""  />
      </label>
    <input type="submit" value="Envoyer" onClick={() => createJob}/>
    </form>
    
  );
};


export default AddJobComponent;

