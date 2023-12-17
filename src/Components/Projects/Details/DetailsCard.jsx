const DetailsCard = ({ project }) => {
  const { img1, img2, img3, title, subtitle, description } = project || {};

  return (
    <div>
      <section className="p-4 lg:p-8 bg-base-200 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={img1}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsCard;
