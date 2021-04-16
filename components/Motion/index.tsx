import { Box, Button, forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(
        ([key]) => !isValidMotionProp(key),
      ),
    )
    return <Box ref={ref} {...chakraProps} />
  }),
)

// 2. Create a custom motion component from Button
const MotionButton = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(
        ([key]) => !isValidMotionProp(key),
      ),
    )
    return <Button ref={ref} {...chakraProps} />
  }),
)

export { MotionBox, MotionButton }
