import React from "react";
import swal from 'sweetalert'
import "./AddModal.css";

const AddModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
               <strong> Add Product </strong>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">

            <form action="">
            <div className="form-group">
                <label htmlFor="eproductName">Product Name</label>
                <input type="email" className="form-control" id="productName" placeholder="Example: Detective Conan" />
                <br/>
                <label htmlFor="upload-image">Upload image</label>
                <input type="file" className="form-control-file" id="upload-image" />
                <br/>
                <label htmlFor="cat_name">Select Category</label>
                <select className="form-control" name="cat_name" id="cat_name">
                    <option value="Book">Book</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Other">Others</option>
                </select>
                <br/>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="form-control" id="quantity" placeholder="Example: 4" />
                <br/>
               
                
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                    <div className="input-group-text">Rp</div>
                    </div>
                    <input type="number" className="form-control" id="price" placeholder="Price" />
                </div>
               <br/>

               <div>
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows={3} defaultValue={""} />
                </div>
                <br/>

                <label htmlFor="weight">Weight</label>
                <input type="number" className="form-control" id="weight" placeholder="Example: 4" />
                <br/>
                <label htmlFor="width">Width</label>
                <input type="number" className="form-control" id="width" placeholder="Example: 4" />
                <br/>
                <label htmlFor="height">Height</label>
                <input type="number" className="form-control" id="height" placeholder="Example: 4" />
                <br/>
                <label htmlFor="ISBN">ISBN</label>
                <input type="text" className="form-control" id="ISBN" placeholder="Example: 978-602-8519-93-9" />
                <br/>
                <label htmlFor="publisher">Pusblisher</label>
                <input type="text" className="form-control" id="publisher" placeholder="Example: Bukune" />
                <br/>
                <label htmlFor="pages">Pages</label>
                <input type="number" className="form-control" id="pages" placeholder="Example: 325" />
                <br/>
                <label htmlFor="genre">Genre</label>
                <input type="text" className="form-control" id="genre" placeholder="Example: Comedy" />
                <br/>
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" placeholder="Example: Raditya Dika" />
                <br/>
                <label htmlFor="import">is it import?</label>
                <select className="form-control" name="import" id="importe">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <br/>
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" placeholder="Example: Raditya Dika" />
                <br/>
                <label htmlFor="publish_date">Publish date</label>
                <input type="date" className="form-control" id="publish_date" value="2019-11-01" />
                <br/>
                <label htmlFor="book_type">Select book type</label>
                <select className="form-control" name="cat_name" id="cat_name">
                    <option value="Comic">Comic</option>
                    <option value="Novel">Novel</option>
                    <option value="">It's not book</option>
                </select>
                <br/>



            </div>
            </form>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
              type="button" 
              className="btn btn-success"
              data-dismiss="modal"
              onClick={ ()=> {
                swal("Nice!", "Product has been added!", "success");
              }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
