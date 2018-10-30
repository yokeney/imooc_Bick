import React,{Component} from "react";
import util from '../../util/util'
import {Table } from 'antd'
 export default class ETable  extends Component{
     onRowClick =(recod,index) =>{
         let rowSelection=this.props.rowSelection;
         if (rowSelection==="checkbox") {
             let selectedRowKeys=this.props.selectedRowKeys;
             let selectItem=this.props.selectItem;
             let selectedIds=this.props.selectedIds;
             if (selectedIds) {
                 const i=selectedIds.indexOf(recod.id);
                 if (i==-1) {
                     selectedIds.push(recod.id);
                     selectedRowKeys.push(index);
                     selectItem.push(recod);
                 }
                 else{
                     selectedIds.splice(i,1);
                     selectedRowKeys.splice(i,1);
                     selectItem.splice(i,1);
                 }
             }
             else{
                 selectedIds=[recod.id];
                 selectedRowKeys=[index];
                 selectItem=[recod];
             }
             this.props.updateSelectedItem(selectedRowKeys,selectItem,selectedIds)
         }
         else{
             let selectedRowKeys=[index];
             let selectItem=recod;
             this.props.updateSelectedItem(selectedRowKeys,selectItem)
         }
     }
     tableInit=()=>{
         let row_selection=this.props.rowSelection;
         const selectedRowKeys=this.props.selectedRowKeys;
         const rowSelection={
             type:'radio',
             selectedRowKeys,
             onChange:this.onSelectChange,
         }
         if (row_selection===false||row_selection===null ) {
             row_selection=false;
         }
         else if(row_selection==="checkbox"){
             rowSelection.type="checkbox"
         }
         else{
             row_selection='radio'
         }
         return < Table
         {...this.props}
         rowSelection={row_selection?rowSelection:null}
         onRow={(recod,index) => {
             return {
               onClick: () => {
                   this.onRowClick(recod,index)
               },
             };
           }}
        />
      }
     render(){
         return (
             <div>
                {this.tableInit()}
             </div>
         )
     }
 }
