import React from "react";
import { useNavigate } from "react-router";
import envsService from "../services/envs.service";

function Dashboard() {

  const envVariables = [
    {
      key: '',
      value: ''

    }
  ]

  const projectId = 1234

  const navigate = useNavigate()
  const [envs, setEnvs] = React.useState(envVariables)

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('login_status'))) {
      navigate('/dashboard')
    }
    else {
      navigate('/')
    }
    envsService.get(projectId).then(data => {
      if (data.data.message[0].variables) {
        setEnvs(data.data.message[0].variables)
      }
    })
  },[])

  const setSelectedAssetValue = (e, i) => {
    let _env = envs
    const envType = e.target.className.split(' ')[1]
    _env[i][envType] = e.target.value
    setEnvs([..._env])
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {variables: envs, id:projectId, user: JSON.parse(localStorage.getItem('user_token')).email}

    envsService.update(data).then(resp=> {
      alert(resp.data.message)
    })
    .catch(err => {
      alert(err);
    })
  };

  const addMore = (e) => {
    e.preventDefault();
    const input = {
      key: '',
      value: ''
    }
    setEnvs([...envs, input])
  }

  const logout = () => {
    if (localStorage.getItem('login_status')){
      localStorage.setItem('login_status', false)
      navigate('/')
    }
  }

  return (
    <>
      <div className="container">
        <header className="row">
          <h5 className="title col-md-5">
           Create New ENV Variables
          </h5>
          <button className="btn btn-info col-md-1 offset-md-6" onClick={logout}>Logout</button>
        </header>
        <form className="form-group">
          <div className="form-input-container">
            {envs.map((env,i) => 
                <div className="row" key={i}>
                  <div className="col-md-5">
                    <label>Key</label>
                    <input
                      type="text"
                      className="form-control key"
                      value={env.key}
                      onChange={(e) => setSelectedAssetValue(e, i)}
                    />
                  </div>
                  <div className="col-md-5">
                    <label>
                      <label>Value</label>
                    </label>
                    <input
                      type="text"
                      className="form-control value"
                      value={env.value}
                      onChange={(e) => setSelectedAssetValue(e, i)}
                    />
                  </div>
                </div>
            )}
           
          </div>
          <div className="row">
            <button className="btn btn-primary offset-md-9 col-md-1" onClick={addMore}>Add more</button>
          </div>
          <button className="btn btn-success col-md-3 offset-md-4" onClick={submit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Dashboard
