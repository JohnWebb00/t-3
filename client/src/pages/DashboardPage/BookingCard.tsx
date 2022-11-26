import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Stack, StackProps, Typography } from '@mui/material'
import React from 'react'
import IconAction from './IconAction'
import { Booking } from './types'
// TODO: use backend model

type Props = {
  booking: Booking
  openModalWithParams: Function
  setBookingState: (bookingId: Booking['id'], state: Booking['state']) => void
} & StackProps

// TODO: different cards based on state (denied should have delete option)
const BookingCard: React.FC<Props> = ({
  booking,
  openModalWithParams,
  setBookingState,
  ...props
}) => {
  const { id, user, reason, date, state } = booking
  return (
    <Stack
      direction="row"
      {...props}
      sx={{
        backgroundColor: 'white',
        padding: 2,
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        ...props.sx,
        transition: 'border-radius 500ms',
        '&:active': {
          boxShadow: 'none'
        },
        '&:hover': {
          borderRadius: '10px'
        }
      }}
    >
      <Typography fontWeight={600}>{user}:&nbsp;</Typography>
      <Typography>{reason}</Typography>
      <Stack direction="row" ml="auto">
        <IconAction
          tooltip="Deny Appointment"
          icon={<CloseIcon color="error" />}
          onClick={() =>
            openModalWithParams({
              title: 'Confirm Action',
              description: `You're about to deny ${user}'s appointment on ${date}. Are you sure?`,
              onAccept: () => setBookingState(id, 'denied')
            })
          }
        />
        <IconAction
          tooltip="Accept Appointment"
          icon={<CheckIcon color="success" />}
          onClick={() =>
            openModalWithParams({
              title: 'Confirm Action',
              description: `You're about to accept ${user}'s appointment on ${date}. Are you sure?`,
              onAccept: () => setBookingState(id, 'approved')
            })
          }
        />
      </Stack>
    </Stack>
  )
}

export default BookingCard
