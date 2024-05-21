import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import Modal from '../components/Shared/modal/Modal'

const HomePage = () => {
  // const [user] = useAuth();
  
  return (
    <Layout>
      <h4 className='ms-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:"pointer"}}>
        <i className='fa-solid fa-plus text-success py-4'></i>
        Add Inventory</h4>
        <Modal />
    </Layout>
  );
};

export default HomePage;
