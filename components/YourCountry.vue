<template>
  <div>
    <Expansion title="A-C" :index="0" v-model="open">
      <ul class="listitems">
        <li>
          <nuxt-link to="/admissions/countries/albania">Albania</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/algeria">Algeria</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/argentina">Argentina</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/australia">Australia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/austria">Austria</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/azerbaijan"
            >Azerbaijan</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/bahrain">Bahrain</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/bangladesh"
            >Bangladesh</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/belgium">Belgium</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/belize">Belize</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/bolivia"
            >Bolivia, Plurinational State of</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/brazil">Brazil</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/brunei-darussalam"
            >Brunei Darussalam</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/bulgaria">Bulgaria</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/cameroon">Cameroon</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/canada">Canada</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/chile">Chile</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/china">China</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/colombia">Colombia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/costa-rica"
            >Costa Rica</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/croatia">Croatia</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/cuba">Cuba</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/cyprus">Cyprus</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/czech-republic"
            >Czech Republic</nuxt-link
          >
        </li>
      </ul>
    </Expansion>
    <Expansion title="D-G" :index="1" v-model="open">
      <ul class="listitems">
        <li>
          <nuxt-link to="/admissions/countries/denmark">Denmark</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/dominican-republic"
            >Dominican Republic</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/ecuador">Ecuador</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/egypt">Egypt</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/el-salvador"
            >El Salvador</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/estonia">Estonia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/ethiopia">Ethiopia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/finland">Finland</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/france">France</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/georgia">Georgia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/germany">Germany</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/ghana">Ghana</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/greece">Greece</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/guatemala">Guatemala</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/guyana">Guyana</nuxt-link></li>
      </ul>
    </Expansion>
    <Expansion title="H-K" :index="2" v-model="open">
      <ul class="listitems">
        <li><nuxt-link to="/admissions/countries/haiti">Haiti</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/honduras">Honduras</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/hong-kong">Hong Kong</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/hungary">Hungary</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/iceland">Iceland</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/india">India</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/indonesia">Indonesia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/iran"
            >Iran, Islamic Republic of</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/iraq">Iraq</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/israel">Israel</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/italy">Italy</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/japan">Japan</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/jordan">Jordan</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/kazakhstan"
            >Kazakhstan</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/kenya">Kenya</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/kuwait">Kuwait</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/kyrgyzstan"
            >Kyrgyzstan</nuxt-link
          >
        </li>
      </ul>
    </Expansion>
    <Expansion title="L-O" :index="3" v-model="open">
      <ul class="listitems">
        <li><nuxt-link to="/admissions/countries/latvia">Latvia</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/lebanon">Lebanon</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/libya">Libya</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/lithuania">Lithuania</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/luxembourg"
            >Luxembourg</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/macao">Macao</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/malaysia">Malaysia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/mauritius">Mauritius</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/mexico">Mexico</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/morocco">Morocco</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/myanmar">Myanmar</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/nepal">Nepal</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/netherlands"
            >Netherlands</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/new-zealand"
            >New Zealand</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/nicaragua">Nicaragua</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/niger">Niger</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/nigeria">Nigeria</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/norway">Norway</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/oman">Oman</nuxt-link></li>
      </ul>
    </Expansion>
    <Expansion title="P-T" :index="4" v-model="open">
      <ul class="listitems">
        <li>
          <nuxt-link to="/admissions/countries/pakistan">Pakistan</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/palestine">Palestine</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/panama">Panama</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/paraguay">Paraguay</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/peru">Peru</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/philippines"
            >Philippines</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/poland">Poland</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/portugal">Portugal</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/puerto-rico"
            >Puerto Rico</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/qatar">Qatar</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/romania">Romania</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/russian-federation"
            >Russian Federation</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/rwanda">Rwanda</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/saudi-arabia"
            >Saudi Arabia</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/singapore">Singapore</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/slovakia">Slovakia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/slovenia">Slovenia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/south-africa"
            >South Africa</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/south-korea"
            >South Korea</nuxt-link
          >
        </li>
        <li><nuxt-link to="/admissions/countries/spain">Spain</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/sri-lanka">Sri Lanka</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/suriname">Suriname</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/sweden">Sweden</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/switzerland"
            >Switzerland</nuxt-link
          >
        </li>
      </ul>
    </Expansion>
    <Expansion title="T-Z" :index="5" v-model="open">
      <ul class="listitems">
        <li><nuxt-link to="/admissions/countries/taiwan">Taiwan</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/tanzania"
            >Tanzania, United Republic of</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/thailand">Thailand</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/turkey">Turkey</nuxt-link></li>
        <li><nuxt-link to="/admissions/countries/uganda">Uganda</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/ukraine">Ukraine</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/united-arab-emirates"
            >United Arab Emirates</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/united-states"
            >United States</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/uruguay">Uruguay</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admissions/countries/uzbekistan"
            >Uzbekistan</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/venezuela"
            >Venezuela, Bolivarian Republic of</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/admissions/countries/vietnam">Vietnam</nuxt-link>
        </li>
        <li><nuxt-link to="/admissions/countries/yemen">Yemen</nuxt-link></li>
        <li>
          <nuxt-link to="/admissions/countries/zimbabwe">Zimbabwe</nuxt-link>
        </li>
      </ul>
    </Expansion>
  </div>
</template>

<script setup lang="ts">
const open = ref(null);
</script>

<style scoped></style>
