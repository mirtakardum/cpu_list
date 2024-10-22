import { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Form from './Form';

const ListDisplay = () => {
    const [cpus, setCpus] = useState([]);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchCpus = async () => {
        try {
            const response = await fetch('http://localhost:5000/cpuRoutes');
            const data = await response.json();
            setCpus(data);
            console.log(cpus)
        } catch (error) {
            console.error('Error fetching CPUs:', error);
        }
        };

    fetchCpus();

  }, []);

    const toggleEditing = (cpuId) => {
        setEditing((prevStates) => ({
        ...prevStates,
        [cpuId]: !prevStates[cpuId],
        }));
        console.log(editing);
    };

  
    return(
            <div className="h-screen w-full pt-28 px-4">
              <div className="mx-auto w-[75%] divide-y divide-white/5 rounded-xl bg-black/80">
                {cpus.map((cpu) => (
                  <Disclosure as="div" key={cpu.id} className="p-6">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                          <div className="text-sm font-semibold text-white group-hover:text-white/80">
                            {cpu.brand} {cpu.model} - Socket: {cpu.Socket.name}
                          </div>
                          <svg
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-white`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </DisclosureButton>
                        <DisclosurePanel>
                        {!editing[cpu.brand] && (
                        <div className="flex justify-between mt-6 text-sm text-white/80">
                            <p>Brand: {cpu.brand}</p>
                            <p>Model: {cpu.model}</p>
                            <p>Socket: {cpu.Socket.name}</p>
                            <p>Clockspeed: {cpu.clockSpeed} GHz</p>
                            <p>Cores: {cpu.cores}</p>
                            <p>Threads: {cpu.threads}</p>
                            <p>TDP: {cpu.tdp} W</p>
                            <p>Price: €{cpu.price}</p>
                          </div>) }
                          {editing[cpu.brand] && (
                            <Form cpus={cpus} cpu={cpu}/>
                            )}
                        <div className="flex justify-end">
                          <button type="button" class="text-white hover:text-gray-900 border border-white hover:bg-white font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 mt-3" onClick={() => {toggleEditing(cpu.brand)}}>{editing[cpu.brand] ? 'Cancel' : 'Edit'}</button>
                        </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          );
        }

export default ListDisplay;