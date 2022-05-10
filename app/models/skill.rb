class Skill < ApplicationRecord
    belongs_to :applicant
    

    def columns
        Skill.column_names
    end
   
    def truthy_keys
        columns.select{|k| self[k] == true}
    end

end
