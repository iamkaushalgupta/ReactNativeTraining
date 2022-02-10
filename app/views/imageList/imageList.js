import React from 'react'
import { View, Image, ScrollView, } from 'react-native'
import { Viewport } from '@skele/components'

import imageUris from './images'
import styles from './styles'

const Placeholder = () => <View style={styles.image} />
const ViewportAwareImage = Viewport.Aware(Viewport.WithPlaceholder(Image, Placeholder))

const PRE_TRIGGER_RATIO = -0.4

export default class ImageList extends React.Component {
  constructor() {
    super()
    this.images = imageUris.map((uri, index) =>
      <ViewportAwareImage
        key={index}
        source={{ uri }}
        preTriggerRatio={PRE_TRIGGER_RATIO} // default is 0
        retainOnceInViewport={false}        // default is false
        style={styles.image}
      ></ViewportAwareImage>
    )
  }
  
  render() {
    return (
      <Viewport.Tracker>
        <ScrollView
          contentContainerStyle={styles.container}>
          { this.images }
        </ScrollView>
      </Viewport.Tracker>
    )
  }
}

