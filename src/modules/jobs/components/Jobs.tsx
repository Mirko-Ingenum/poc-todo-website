import Job from "../models/Job.model";
import  "../../shared/styles/Table.css";
import Button from "../../shared/components/Button";
export interface Props {
  jobs: Job[];
}

const Jobs = ({ jobs }: Props) => {
  return (
    
    <div className="style">
      <header className="style-header">
      
      <table>
        <tbody>
          <tr>
            <td>Todo</td>
            <td>Doing</td>
            <td>Done</td>

          </tr>

          <tr>
            <td>
            {jobs.map(job => (
              <>
                <h5><u>Title :</u> {job.title}</h5>
                <h5><u>Due date :</u> {job.date}</h5>
                <h5><u>Description :</u> {job.description}</h5>
                <br></br>
              </>
            ))}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </header>
    </div >
  );
}

export default Jobs;