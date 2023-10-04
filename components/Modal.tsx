import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { imageAdd } from '@/redux/UserData';



export default function ModalFun({ isOpen, onRequestClose }:any) {
  const userDetails = useSelector((state:any)=>state.user.userRegistration)
  const userProfile = useSelector((state:any)=>state.user.profileImage)


 const [profile,setProfile] = useState("")
 const dispatch = useDispatch()
 const handleProfileImageUpload = (e:any) => {
  const file = e.target.files[0];
  if (file) {

    dispatch(imageAdd(file))

  }
};
  useEffect(()=>{
 if(userProfile instanceof Blob){
    const imageUrl = URL.createObjectURL(userProfile);
    setProfile(imageUrl);
 }
  },[userProfile])

  return (
    <Modal
      show={isOpen}
      onHide={onRequestClose}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section >
  <div className="container py-5">
    <div className="row">
    
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={ profile||"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
                            {/* <input type='file' onChange={handleProfileImageUpload}/> */}
            {/* <h5 className="my-3">John Smith</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
       
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails?.firstName} {userDetails?.lastName}</p>

              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails?.email}</p>
              </div>
            </div>
            <hr />
         
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails?.phoneNumber}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails?.address}</p>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  </div>
</section>

      </Modal.Body>
      {/* <Modal.Footer>
        <button className="btn btn-secondary" onClick={onRequestClose}>
          Close
        </button>
        <button className="btn btn-primary">Save changes</button>
      </Modal.Footer> */}
    </Modal>
  );
}
