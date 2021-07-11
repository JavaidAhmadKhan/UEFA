import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import React from 'react'
import { View, Text } from 'react-native'
import PlayerListItem from './PlayerListItem'

const PlayersList = () => {
    return (
        <BottomSheetFlatList
          data={players}
          renderItem={({ item }) => <PlayerListItem player={item} />}
        />
    )
}

export default PlayersList
