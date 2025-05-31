import { reviews } from '@/data/reviews';
import Image from 'next/image';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import SectionTitle from '../shared/SectionTitle';
import Link from 'next/link';
import { FiLinkedin } from 'react-icons/fi';

const reviewSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};
const Testimonial = () => {
  return (
    <>
      <SectionTitle>Voices I've Worked With</SectionTitle>
      <div className="mt-16">
        <Slider {...reviewSettings}>
          {reviews.map((review, index) => (
            <div className="mb-6" key={index}>
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src={review.author.imageUrl} alt={review.author.name} layout="fill" objectFit="cover" />
                </div>
                <h6 className="mt-3 flex items-center gap-2 text-lg font-semibold">
                  {review.author.name}
                  {review.author.linkdin && (
                    <Link
                      href={review.author.linkdin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <a target="_blank">
                        <FiLinkedin size={18} />
                      </a>
                    </Link>
                  )}
                </h6>

                <p className="text-sm text-gray-400 dark:text-gray-200">
                  {review.author.designation} at {review.author.company}.
                </p>
                <div className="mt-6 max-w-2xl rounded-2xl bg-white p-8 text-gray-500 shadow-lg dark:bg-gray-700 dark:text-gray-200">
                  {review.comment}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
