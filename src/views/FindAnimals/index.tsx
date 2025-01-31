import Header from "../main/Header";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import './index.css'

const animalOptions = [
    {value: "dog", label: "강아지"},
    {value: "cat", label: "고양이"},
    {value: "etc", label: "기타"},
];
const breedOptions = {
    dog: [
        {value: "shiba", label: "시바견"},
        {value: "jindo", label: "진돗개"},
    ],
    cat: [
        {value: "persian", label: "페르시안"},
        {value: "bengal", label: "뱅갈"},
    ],
    etc: [
        {value: "rabbit", label: "토끼"},
    ],
};
const regionOptions = [
    {value: "seoul", label: "서울"},
    {value: "busan", label: "부산"},
    {value: "incheon", label: "인천"},
];

type RegionOption = { value: string; label: string; } | null;
type Option = { value: string; label: string; } | null;
type AnimalType = 'dog' | 'cat' | 'etc';

const FA: React.FC =  () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<RegionOption>(null);
    const [selectedDate, setSelectDate] = useState<Date | null>(null);
    const [selectedAnimal, setSelectedAnimal] = useState<Option>(null);
    const [selectedBreed, setSelectedBreed] = useState<Option>(null);

    const getBreedOptions = () => {
        if (!selectedAnimal) return [];
        return breedOptions[selectedAnimal.value as AnimalType] || [];
    };

    return (
        <div className='fa-container'>
            <div className='fa-header'>
                <Header isScrolled={isScrolled}/>
            </div>
            <div className='select-container'>
                <div className="select-form">
                    <h2 className="title">유기동물 지도</h2>
                    <div className="region-search">
                        <label>지역</label>
                        <Select
                            options={regionOptions}
                            value={selectedRegion}
                            onChange={setSelectedRegion}
                            placeholder="지역 선택"
                        />
                    </div>
                    <div className="date-search">
                        <label>일시</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectDate(date)}
                            className="w-full p-2 border rounded"
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                    <div className="animal-search">
                        <label>동물</label>
                        <Select
                            options={animalOptions}
                            value={selectedAnimal}
                            onChange={setSelectedAnimal}
                            placeholder="동물 선택"
                        />
                    </div>
                    <div className="kind-search">
                        <label>종류</label>
                        <Select
                            options={getBreedOptions()}
                            value={selectedBreed}
                            onChange={setSelectedBreed}
                            placeholder="종류 선택"
                            isDisabled={!selectedAnimal}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full h-fill bg-gray-300 flex items-center justify-center">
                        <span className="text-lg font-bold">지도 영역</span>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default FA;