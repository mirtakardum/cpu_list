import { useState, useEffect } from "react";

const Form = ({cpus, cpu}) => {

    const [sockets, setSockets] = useState([]);
    const [formData, setFormData] = useState({
        brand: cpu.brand || '',
        model: cpu.model || '',
        socketId: cpu.socketId || '',
        clockSpeed: cpu.clockSpeed || '',
        cores: cpu.cores || '',
        threads: cpu.threads || '',
        tdp: cpu.tdp || '',
        price: cpu.price || '',
    });

    useEffect(() => {
        const fetchSockets = async () => {
        try {
            const response = await fetch('http://localhost:5000/socketRoutes');
            const data = await response.json();
            console.log(data)
            setSockets(data);
        } catch (error) {
            console.error('Error fetching Socketss:', error);
        }
        };

    fetchSockets();
    console.log(cpu.id)

  }, []);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
        [field]: value,
      }
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/cpuRoutes/${cpu.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('CPU updated successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error updating CPU: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating CPU:', error);
      alert('An error occurred while updating the CPU.');
    }
  };

    return(
        <>
        <form className="text-balance mt-5" onSubmit={() => handleSubmit(e, formData, cpu.id)}>
            <label className="text-white/80 text-sm">Brand: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="text"
            required
            value={formData.brand}
            onChange={(e) => handleInputChange(e, 'brand')}
            />
            </label>
            <label className="text-white/80 text-sm">Model: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="text"
            required
            value={formData.model}
            onChange={(e) => handleInputChange(e, 'model')}
            />
            </label>                     
            <label className="text-white/80 text-sm">Socket:
            <select
                className="text-gray-900 ml-3 mr-5"
                required
                value={cpus[cpu.id]?.socketId || cpu.socketId}
                onChange={(e) => handleInputChange(e, 'socketId')}
            >
                <option value="">Select Socket</option>
                    {sockets.map((socket) => (
                    <option key={socket.id} value={socket.id}>
                        {socket.name}
                </option>
            ))}
          </select>
            </label>                     
            <label className="text-white/80 text-sm">Clockspeed: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="number"
            required
            value={formData.clockSpeed}
            onChange={(e) => handleInputChange(e, 'clockSpeed')}
            />
            </label>                     
            <label className="text-white/80 text-sm">Cores: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="number"
            required
            value={formData.cores}
            onChange={(e) => handleInputChange(e, 'cores')}
            />
            </label>                     
            <label className="text-white/80 text-sm">Threads: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="number"
            required
            value={formData.threads}
            onChange={(e) => handleInputChange(e, 'threads')}
            />
            </label>                     
            <label className="text-white/80 text-sm">TDP: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="number"
            required
            value={formData.tdp}
            onChange={(e) => handleInputChange(e, 'tdp')}
            />
            </label>                     
            <label className="text-white/80 text-sm">Price: 
            <input
            className="text-gray-900 ml-3 mr-5"
            type="number"
            required
            value={formData.price}
            onChange={(e) => handleInputChange(e, 'price')}
            />
            </label>                     
        </form>
        <div className="flex justify-end">
        <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mt-5" onClick={handleSubmit}>Save</button>
        </div>
        </>
    );
} 

export default Form;