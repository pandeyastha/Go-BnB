'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";

import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';
import Heading from '../Heading';
import { categories } from '../navbar/Categories';
import CategoryInput from '../input/CategoryInput';


enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }

const RentModal = () => {
  const rentModal =useRentModal();
  const [step,setStep] =useState(STEPS.CATEGORY);
  
  //carousel of moving fornt/back
  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

    //setting action Label 

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step]);
  //cheking if secondary label exists or not 
  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step]);
     
  let bodyContent =(
    <div className="flex flex-col gap-8">
      <Heading 
      title= "Which of these best describes your place?"
      subtitle='Pick a category'/>

        <div className='
        grid
        grid-cols-1
        md:grid-cols-2
        gap-3
        max-h-[50vh]
        overflow-y-auto
        '
        >
          {categories.map((item) => (
            <div key= {item.label} className='col-span-1'>
              <CategoryInput
              onClick={ () => {}}
              selected={false}
              label={item.label}
              icon={item.icon} 
              />
            </div>
          ))}
        </div>

    </div>
  )









  return (
    <Modal
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={rentModal.onClose}
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    title="AirBnb Your Home!"
    body={bodyContent}
    />
  );
}

export default RentModal;