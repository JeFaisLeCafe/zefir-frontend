import { ChangeEvent, useEffect, useState } from 'react';
import { filterHomesByAddress } from '../utils/filterHomesByAddress';
import { filterHomesByAddressLevenshtein } from '../utils/filterHomesByAddressLevenshtein';
import { HomeCard } from './HomeCard';

export const HomeList = ({ homes }: { homes: Home[] }) => {
  const [filter, setFilter] = useState<string>('');
  const [filteredHomes, setFilteredHomes] = useState<Home[]>(homes);
  const [filterFn, setFilterFn]=useState<(homes: Home[], filter: string) => Home[]>(() => filterHomesByAddress)

  const handleFilterFn=(e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'normal'){
      setFilterFn(() => filterHomesByAddress)
    } else {
      setFilterFn(() => filterHomesByAddressLevenshtein)
    }
  }

  useEffect(() => {

    const res = filterFn(homes, filter);
    setFilteredHomes(res)

  }, [filter, homes, filterFn]);

  return ( 
    <div className="flex flex-col pt-4">
      <div>
        <label className='pr-4'>Filtre: </label>
        <input type="radio" name="gender" value="normal" onChange={handleFilterFn} defaultChecked  />
          Normal
        <input type="radio" name="gender" value="smart" onChange={handleFilterFn} />
          Smart
      </div>
      <input 
        placeholder='Search an address...'
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} />
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-4">
        {filteredHomes.map((home: Home) => <HomeCard key={home.id} {...home} />)}
      </div>
    </div>
  )
}
 

