class SkillSerializer < ActiveModel::Serializer
  attributes :id, :backend, :frontend, :javascript, :rails, :react, :ruby
end
