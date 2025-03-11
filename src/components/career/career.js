import React from 'react';
import { useTranslation } from 'react-i18next';
import { timelineData } from '../../data/timeline';
import { CareerIcon } from './careerIcon';

const CareerItem = ({ event, index, isLast }) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div
        className={`mb-20 md:mb-12 flex items-center justify-center font-urbanist ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}>
        <div
          className={`w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
          }`}>
          <div className="bg-white dark:bg-slate-800 dark:text-slate-300 p-6 rounded-lg shadow dark:shadow-slate-500 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-lime-200 transition-shadow duration-300">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-lime-100 dark:text-lime-700 rounded-full text-sm font-semibold mb-2">
              {t(event.year)}
            </span>
            <h3 className="text-xl font-comfortaa font-bold dark:text-lime-400 text-slate-900 mb-1">
              {t(event.title)}
            </h3>
            <p className="text-blue-600 dark:text-lime-200 font-medium mb-2">
              {t(event.company)}
            </p>
            <p className="text-gray-600 dark:text-gray-200">
              {t(event.description)}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {event.tags &&
                event.tags.map((tag, tagIndex) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500 dark:bg-lime-300 dark:text-slate-900 text-slate-100 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-blue-500 dark:bg-lime-300 flex items-center justify-center text-white dark:text-slate-900 shadow-lg">
            <CareerIcon type={event.type} />
          </div>
        </div>

        <div className="md:w-1/2" />
      </div>

      <div
        className="md:hidden absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-2"
        style={{ top: '100%' }}>
        {!isLast && (
          <div>
            {Array.from({ length: 3 }).map((_) => (
              <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-lime-300 my-1" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Career = () => {
  const { t } = useTranslation();
  const [isDarkTheme, setIsDarkTheme] = React.useState(
    document.documentElement.classList.contains('dark')
  );

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkTheme(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="experience" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="font-comfortaa text-4xl font-bold text-center mb-16">
        {t('professionalJourney')}
      </h2>
      <div className="relative">
        <div
          className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-full ${
            isDarkTheme ? 'dark-large-dotted-line' : 'large-dotted-line'
          }`}
        />
        {timelineData.map((event, index) => (
          <CareerItem
            key={index}
            event={event}
            index={index}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Career;
