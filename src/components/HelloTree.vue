<template>
  <div class='hello'>
    <h1>Hello Tree</h1>
    <el-tree ref="tree" 
    :data="manageData" show-checkbox node-key="id" 
    :default-expanded-keys="defaultSelectedId" 
    :default-checked-keys="defaultSelectedId"  
    :check-strictly="true" @check-change="handleCheckChange" />
    <button @click="btnAction">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloTree',
  data () {
    return {
      manageData: [],
      projectData: [
        {
          canRead: true,
          projectId: 'project1',
          scada: [
            {
              scadaId: 'scadaId1',
              scadaName: 'scadaName1',
              canRead: false,
              device: [
                {
                  deviceId: 'deviceId1',
                  deviceName: 'deviceName1',
                  canRead: false
                },
                {
                  deviceId: 'deviceId2',
                  deviceName: 'deviceName2',
                  canRead: false
                }
              ]
            },
            {
              scadaId: 'scadaId2',
              scadaName: 'scadaName2',
              canRead: false,
              device: [
                {
                  deviceId: 'deviceId1',
                  deviceName: 'deviceName1',
                  canRead: true
                }
              ]
            }
          ]
        },
        {
          canRead: true,
          projectId: 'project2',
          scada: [
            {
              scadaId: 'scadaId1',
              scadaName: 'scadaName1',
              canRead: true,
              device: [
                {
                  deviceId: 'deviceId1',
                  deviceName: 'deviceName1',
                  canRead: true
                },
                {
                  deviceId: 'deviceId2',
                  deviceName: 'deviceName2',
                  canRead: false
                }
              ]
            },
            {
              scadaId: 'scadaId2',
              scadaName: 'scadaName2',
              canRead: true,
              device: [
                {
                  deviceId: 'deviceId1',
                  deviceName: 'deviceName1',
                  canRead: true
                }
              ]
            }
          ]
        },
        {
          canRead: true,
          projectId: 'project3',
          scada: []
        },
        {
          canRead: false,
          projectId: 'project4',
          scada: [
            {
              scadaId: 'scadaId1',
              scadaName: 'scadaName1',
              canRead: true,
              device: [
                {
                  deviceId: 'deviceId1',
                  deviceName: 'deviceName1',
                  canRead: true
                },
                {
                  deviceId: 'deviceId2',
                  deviceName: 'deviceName2',
                  canRead: false
                }
              ]
            }
          ]
        }
      ],
      defaultSelectedId: []
    }
  },
  methods: {
    getManageList () {
      const self = this
      const data = this.projectData
      for (let p of data) {
        let itemLevel1 = {}
        itemLevel1.id = p.projectId
        if (p.canRead) self.defaultSelectedId.push(itemLevel1.id)
        itemLevel1.label = p.projectId
        itemLevel1.children = []
        for (let s of p.scada) {
          let itemLevel2 = {}
          itemLevel2.parentId = itemLevel1.id
          itemLevel2.id = itemLevel1.id + '-' + s.scadaId
          if (s.canRead) self.defaultSelectedId.push(itemLevel2.id)
          itemLevel2.label = s.scadaId
          itemLevel2.children = []
          for (let d of s.device) {
            let itemLevel3 = {}
            itemLevel3.parentId = itemLevel2.id;
            itemLevel3.id = itemLevel2.id + '-' + d.deviceId
            if (d.canRead) self.defaultSelectedId.push(itemLevel3.id)
            itemLevel3.label = d.deviceId
            itemLevel2.children.push(itemLevel3)
          }
          itemLevel1.children.push(itemLevel2)
        }
        self.manageData.push(itemLevel1)
      }
    },
    btnAction () {
      const selectedNodes = this.$refs.tree.getCheckedNodes()
      console.log(selectedNodes)
    },
    handleCheckChange (node, isChecked) {
    if(node.children) this.setChildNodeChecked(node, isChecked)
    if(node.parentId && isChecked) this.setParentNodeChecked(node.parentId, isChecked);
    },
    setChildNodeChecked (node, isChecked) {
      for (const child of node.children) {
        this.$refs.tree.setChecked(child, isChecked)
        if (child.children) this.setChildNodeChecked(child, isChecked);        
      }
    },
    setParentNodeChecked (id, isChecked){
      this.$refs.tree.setChecked(id, isChecked)
    }    
  },
  beforeMount () {
    this.getManageList()
  }
}
</script>

<style scoped>

</style>
