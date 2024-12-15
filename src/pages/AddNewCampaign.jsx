import Swal from 'sweetalert2'

const AddNewCampaign = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCampaign = {image, title, type, description, minDonation, deadline, email, name}
        
        fetch('https://unity-pledge-server.vercel.app/addCampaign', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Great job!",
                    text: "Your Campaign Added Successfully!",
                    icon: "success"
                  });
            }
        })

    }

    return (
        <div className="container mx-auto p-8 max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Add New Campaign</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Campaign Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter campaign title"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Campaign Type</label>
            <select
              name="type"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select type</option>
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
              <option value="others">Others</option>
            </select>
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Minimum Donation Amount</label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter minimum donation amount"
              className="input input-bordered w-full"
              min="1"
              required
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Deadline</label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
            />
          </div>
  
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
  
          <button type="submit" className="btn btn-warning w-full">
            Add
          </button>
        </form>
      </div>
    );
};

export default AddNewCampaign;