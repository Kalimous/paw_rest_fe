import { ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NationCurrent.css'

interface Option{
    value: string;
    label: string;
}

const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
}

const NationCurrent = () => {
    const regions: Option[] =[
        {value: 'seoul', label: '서울시'},
        {value: 'gyeonggi', label: '경기도'}
    ];
    const breeds: Option[] =[
        {value: 'dog', label: '강아지'},
        {value: 'cat', label: '고양이'},
        {value: 'etc', label: '기타 동물'}
    ]
    return(
        <div className="animal-count">
            <h3 className="title">전국 유기동물 현황<br/></h3>
            <select onChange={handleChange} className="select-region">
                <option value="" disabled selected>지역별</option>
                {regions.map((region: Option) => (
                    <option key={region.value} value={region.value}>
                        {region.label}
                    </option>
                ))}
            </select>
            <select onChange={handleChange} className="select-breed">
                <option value="" disabled selected>품종</option>
                {breeds.map((breed: Option) => (
                    <option key={breed.value} value={breed.value}>
                        {breed.label}
                    </option>
                ))}
            </select>
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
};

export default NationCurrent;
