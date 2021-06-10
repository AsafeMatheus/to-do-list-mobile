import React, {useState} from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import styles from './style'
import ItemBox from '../../components/itemBox/index'

export default function(){
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState(Array)

    const addTask = () => {
        Keyboard.dismiss()
        setTaskList([...taskList, task])
        setTask('')
    }

    const deleteTask = (index:any) => {
        let taskListCopy = [...taskList]
        taskListCopy.splice(index, 1)
        setTaskList(taskListCopy)
    }

    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Tarefas do dia</Text>
            {
                taskList.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                            <ItemBox itemText={item}/>
                        </TouchableOpacity>
                    )
                })
            }

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios'? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder='Escreva a tarefa'
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.circle}>
                        <Text style={styles.textButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}