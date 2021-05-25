import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './dashboard.scss';

const Dashboard = () => {

  const [status, setStatus] = React.useState("Waiting");
  const [service, setService] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios.get('/api/ping')
      .then((res) => {
        setStatus(res.data.message)
      })
      .catch((err) => {
        
      });
  });

  React.useEffect(() => {
    let temp = [
      {
        "service_name": "Hello World",
        "status": "Ok",
        "last_updated": "5-24-2021 10:10:10"
      },
      {
        "service_name": "Ping",
        "status": "Ok",
        "last_updated": "5-24-2021 10:35:10"
      },
      {
        "service_name": "Pong",
        "status": "Offline",
        "last_updated": "5-24-2021 10:10:10"
      }
    ]
    setService(temp);
  }, []);

  const mapService = React.useCallback(() => {
    return service.map((val, i) => {
      return (
        <tr key={i}>
          <td>{val.service_name}</td>
          <td>{val.status}</td>
          <td>{val.last_updated}</td>
        </tr>
      );
    });
  }, [service]);

  React.useEffect(() => {
    console.log("service got updated!");
    console.log(service);
  }, [service]);

  return (
    <section className="dashboard">
      <ToastContainer />
      {status}
      <section className="form">
        <button>Add new Service</button>
      </section>
      <section className="servicetable">
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {mapService()}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default Dashboard;