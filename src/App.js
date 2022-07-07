import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Register Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">NIC Number:</label>
              <input
                type="text"
                className={`form-control ${errors.nic && "invalid"}`}
                {...register("nic", { required: "NIC Number is Required" })}
                onKeyUp={() => {
                  trigger("nic");
                }}
              />
              {errors.nic && (
                <small className="text-danger">{errors.nic.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Vehicle Number:</label>
              <input
                type="text"
                className={`form-control ${errors.vehicle_number && "invalid"}`}
                {...register("vehicle_number", { required: "Vehicle Number is Required" })}
                onKeyUp={() => {
                  trigger("vehicle_numberl");
                }}
              />
              {errors.vehicle_number && (
                <small className="text-danger">{errors.vehicle_number.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Other Vehicle Details:</label>
              <input
                type="text"
                className={`form-control ${errors.other_vehicle_details && "invalid"}`}
                {...register("other_vehicle_details", { required: "Other Vehicle Details are Required",
               })}
               onKeyUp={() => {
                trigger("other_vehicle_details");
              }}
              />
              {errors.other_vehicle_details && (
                <small className="text-danger">{errors.other_vehicle_details.message}</small>
              )}
            </div>
            <div className="flex flex-col bg-red-600">
              <div className="form-group">
                <lebel className="col-form-label">Province:</lebel>
                <from>
                  <select>
                    <option value= "Central Province">Central Province</option>
                    <option value= "Eastern Province">Eastern Province</option>
                    <option value= "Nothern Province">Nothern Province</option>
                    <option value= "Southern Province">Southern Province</option>
                    <option value= "Western Province">Western Province</option>
                    <option value= "Nothern Western Province">Nothern Western Province</option>
                    <option value= "Nothern Central Province">Nothern Central Province</option>
                    <option value= "Uva Province">Uva Province</option>
                    <option value= "Sabaragamuwa Province">Sabaragamuwa Province</option>
                  </select>
                </from>
              </div>

              <div className="form-group">
                <lebel className="col-form-label">District:</lebel>
                <from>
                  <select>
                    <option value="">Colombo</option>
                    <option value="">Gampaha</option>
                    <option value="">Kaluthara</option>
                    <option value="">Kandy</option>
                    <option value="">Mathale</option>
                    <option value="">Nuwara-Eliya</option>
                    <option value="">Galle</option>
                    <option value="">Matara</option>
                    <option value="">Hambantota</option>
                    <option value="">Jaffna</option>
                    <option value="">Kilinochchi</option>
                    <option value="">Mannar</option>
                    <option value="">Vavuniya</option>
                    <option value="">Mullaitivu</option>
                    <option value="">Batticaloa</option>
                    <option value="">Ampara</option>
                    <option value="">Trincomalee</option>
                    <option value="">Kurunegala</option>
                    <option value="">Puttalam</option>
                    <option value="">Anuradhapura</option>
                    <option value="">Polonnaruwa</option>
                    <option value="">Badulla</option>
                    <option value="">Moneragala</option>
                    <option value="">Ratnapura</option>
                    <option value="">Kegalle</option>
                  </select>
                </from>
              </div>
            </div>
            
            <div className="form-group">
              <label className="col-form-label">Preferred Transaction Method:</label>
              <from>
                <select>
                <option value="">Card Payment</option>
                  <option value="">QR Code</option>
                </select>
              </from>
            </div>

            <div className="form-group">
              <label className="col-form-label">Vehicle Category:</label>
              <from>
                <select>
                  <option value= "">Category 1</option>
                  <option value= "">Category 2</option>
                  <option value= "">Category 3</option>
                  <option value= "">Category 4</option>
                </select>
              </from>
            </div>
            
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
