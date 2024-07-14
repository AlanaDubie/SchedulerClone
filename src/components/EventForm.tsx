import React from 'react'

const EventForm = ({ event, setEvent, submitting, handleSubmit }) => {
  return (
    <div>
      <section className="flex-start w-full flex-col">
        <form
          onSubmit={handleSubmit}
          //Left side container form
          className="fixed left-0 top-0 flex min-w-[500px] max-w-[600px] flex-col gap-6 p-10"
        >
          <input //Event Title text input
            value={event.title}
            type="text"
            placeholder="New Event Title"
            className="input w-full border-gray-300 bg-white text-2xl font-medium focus-visible:ring-0"
          />

          <textarea //Event Description text input
            value={event.description}
            className="textarea textarea-bordered w-full border-gray-300 bg-white text-base font-normal focus-visible:ring-0"
            placeholder="Event Description"
          ></textarea>

          <input //Event Location text input
            value={event.location}
            type="text"
            placeholder="Location"
            className="input w-full border-gray-300 bg-white text-base font-normal focus-visible:ring-0"
          />

          <div //Event Earliest and LatestTime container
            className="flex w-full flex-row items-center gap-3"
          >
            <select //Earliest dropdown
              className="select w-full max-w-xl border-gray-300 bg-white text-base font-normal"
            >
              <option disabled selected>
                Earliest Time
              </option>
              <option>9:00 AM</option>
              <option>5:00 PM</option>
            </select>

            <p className="text-normal font-normal text-gray-400">to</p>

            <select //Latest dropdown
              className="select w-full max-w-xl border-gray-300 bg-white text-base font-normal"
            >
              <option disabled selected>
                Latest Time
              </option>
              <option>9:00 AM</option>
              <option>5:00 PM</option>
            </select>
          </div>

          <div //Days of the week
            className="join w-full"
          >
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Mon"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Tue"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Wed"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Thu"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Fri"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Sat"
            />
            <input
              className="btn join-item border-gray-300 bg-white"
              type="checkbox"
              name="options"
              aria-label="Sun"
            />
          </div>

          <select //Timezone dropdown
            className="select w-full min-w-[500px] border-gray-300 bg-white text-base font-normal"
          >
            <option disabled selected>
              Time zone
            </option>
            <option>PST (Pacific Standard Time)</option>
            <option>EST (Eastern Standard Time)</option>
          </select>

          <button className="btn btn-outline inline-block inline-flex items-center">
            Create Event
          </button>
        </form>
      </section>
    </div>
  )
}

export default EventForm
