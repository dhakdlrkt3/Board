<template>
    <div v-if="withData()">
        <button @click="goToBack">돌아가기</button>
        <table>
            <thead>
                <tr>
                    <th>태그</th>
                    <td colspan="2">
                        <input type="radio" name="tag" value="유머" /> 유머
                        <input type="radio" name="tag" value="엽기" /> 엽기
                        <input type="radio" name="tag" value="연예인"/> 연예인
                        <input type="radio" name="tag" value="감동" /> 감동
                        <input type="radio" name="tag" value="동물" /> 동물
                        <input type="radio" name="tag" value="사회" /> 사회
                        <input type="radio" name="tag" value="공지" /> 공지
                        <input type="radio" name="tag" value="기타" /> 기타

                        <!-- {{ data.tag }} -->
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>제목</th>
                    <td colspan="2">
                        <input type="text" :value="data.title">
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <input type="textarea" :value="data.contents">
                        
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="Save">저장</button>

        
    </div>
</template>
<script>
export default {
    data(){
        return{
            data: null,
        }
    },
    methods:{
        withData(){
            if(this.$route.params != undefined){
                this.data = this.$route.params;
                return true;
            }
            return false;
        },
        goToBack(){
            this.$router.go(-1);
        },
        Save(){
            if(this.data != null){
                //데이터가 있으면 데이터 수정
            }
            //없으면 새로운 데이터 추가
        }

    }
}
</script>
