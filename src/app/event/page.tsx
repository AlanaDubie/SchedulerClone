'use client'
import { useState } from 'react'

import EventForm from '@/components/EventForm'

const CreateEvent = () => {
  const [submitting, setSubmitting] = useState(false)
  const [event, setEvent] = useState({
    title: '',
    description: '',
    location: '',
    earliestTime: '',
    latestTime: '',
    days: [],
  })

  const createEvent = async () => {}

  return (
    <EventForm
      event={setEvent}
      setEvent={setEvent}
      submitting={submitting}
      handleSubmit={createEvent}
    />
  )
}

export default CreateEvent
